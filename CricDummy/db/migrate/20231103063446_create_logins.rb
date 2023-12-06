class CreateLogins < ActiveRecord::Migration[7.1]
  def change
    create_table :logins, id: false do |t|
        t.bigserial :loginID, null: false
        t.bigint :userID
        t.string :password, collation: 'default'
      t.timestamps
    end
      execute <<-SQL
        Alter table logins
        Add constraint logins_pkey
        Primary Key ("loginID");
      SQL
      execute <<-SQL
        Alter table logins
        Add constraint fk_logins_user
        FOREIGN KEY ("userID") references users ("userID")
        On Delete set null;
      SQL
  end
end
