class CreateFormats < ActiveRecord::Migration[7.1]
  def change
    create_table :formats, id: false do |t|
      t.bigserial :formatID, null: false, primary_key: true
      t.string :formatName, collation: 'default'
      t.integer :numberOfOvers, limit: 2
      t.text :description, collation: 'default'

      t.timestamps
    end
  end
end
