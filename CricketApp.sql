PGDMP                         {         	   CricDummy    15.4    15.4 k    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17680 	   CricDummy    DATABASE     �   CREATE DATABASE "CricDummy" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "CricDummy";
                postgres    false            �            1259    17688    ar_internal_metadata    TABLE     �   CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 (   DROP TABLE public.ar_internal_metadata;
       public         heap    postgres    false            �            1259    17981    formats    TABLE       CREATE TABLE public.formats (
    "formatID" bigint NOT NULL,
    "formatName" character varying,
    "numberOfOvers" smallint,
    description text,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.formats;
       public         heap    postgres    false            �            1259    17980    formats_formatID_seq    SEQUENCE        CREATE SEQUENCE public."formats_formatID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."formats_formatID_seq";
       public          postgres    false    219            �           0    0    formats_formatID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."formats_formatID_seq" OWNED BY public.formats."formatID";
          public          postgres    false    218            �            1259    18144    logins    TABLE     �   CREATE TABLE public.logins (
    "loginID" bigint NOT NULL,
    "userID" bigint,
    password character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.logins;
       public         heap    postgres    false            �            1259    18143    logins_loginID_seq    SEQUENCE     }   CREATE SEQUENCE public."logins_loginID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."logins_loginID_seq";
       public          postgres    false    227            �           0    0    logins_loginID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."logins_loginID_seq" OWNED BY public.logins."loginID";
          public          postgres    false    226            �            1259    18439    matches    TABLE     �  CREATE TABLE public.matches (
    "matchID" bigint NOT NULL,
    "tourID" bigint,
    "matchStatus" character varying,
    "matchDateTime" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    result character varying,
    "team1ID" bigint,
    "team2ID" bigint,
    "winningTeamID" bigint,
    "refereeID" bigint,
    "venueID" bigint,
    "pom_playerID" bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.matches;
       public         heap    postgres    false            �            1259    18438    matches_matchID_seq    SEQUENCE     ~   CREATE SEQUENCE public."matches_matchID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."matches_matchID_seq";
       public          postgres    false    239            �           0    0    matches_matchID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."matches_matchID_seq" OWNED BY public.matches."matchID";
          public          postgres    false    238            �            1259    18299    player_statistics    TABLE     �  CREATE TABLE public.player_statistics (
    "playerStatisticsID" bigint NOT NULL,
    "playerID" bigint,
    "matchID" bigint,
    "runsScored" bigint,
    "wicketsTaken" bigint,
    "ballsFaced" bigint,
    "oversBowled" double precision,
    "runsConceded" bigint,
    "catchesTaken" smallint,
    "stumpingsMade" smallint,
    "scoreID" bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 %   DROP TABLE public.player_statistics;
       public         heap    postgres    false            �            1259    18298 (   player_statistics_playerStatisticsID_seq    SEQUENCE     �   CREATE SEQUENCE public."player_statistics_playerStatisticsID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public."player_statistics_playerStatisticsID_seq";
       public          postgres    false    231            �           0    0 (   player_statistics_playerStatisticsID_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public."player_statistics_playerStatisticsID_seq" OWNED BY public.player_statistics."playerStatisticsID";
          public          postgres    false    230            �            1259    17960    players    TABLE     �  CREATE TABLE public.players (
    "playerID" bigint NOT NULL,
    "playerName" character varying,
    "dateOfBirth" date,
    country character varying,
    "teamID" bigint,
    "jerseyNO" character varying,
    "runsScored" bigint,
    "wicketsTaken" bigint,
    "matchesPlayed" bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.players;
       public         heap    postgres    false            �            1259    17959    players_playerID_seq    SEQUENCE        CREATE SEQUENCE public."players_playerID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."players_playerID_seq";
       public          postgres    false    217            �           0    0    players_playerID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."players_playerID_seq" OWNED BY public.players."playerID";
          public          postgres    false    216            �            1259    18123    referees    TABLE     2  CREATE TABLE public.referees (
    "refereeID" bigint NOT NULL,
    "refereeName" character varying,
    "dateOfBirth" date,
    nationality character varying,
    "matchesOfficiated" bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.referees;
       public         heap    postgres    false            �            1259    18122    referees_refereeID_seq    SEQUENCE     �   CREATE SEQUENCE public."referees_refereeID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."referees_refereeID_seq";
       public          postgres    false    225            �           0    0    referees_refereeID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."referees_refereeID_seq" OWNED BY public.referees."refereeID";
          public          postgres    false    224            �            1259    17927    schema_migrations    TABLE     R   CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);
 %   DROP TABLE public.schema_migrations;
       public         heap    postgres    false            �            1259    18280 
   scorecards    TABLE     �  CREATE TABLE public.scorecards (
    "scoreID" bigint NOT NULL,
    "matchID" bigint,
    "playerOfMatch" bigint,
    total_overs_team1 double precision,
    total_runs_team1 bigint,
    total_wickets_team1 smallint,
    total_overs_team2 double precision,
    total_runs_team2 bigint,
    total_wickets_team2 smallint,
    match_summary text,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.scorecards;
       public         heap    postgres    false            �            1259    18279    scorecards_scoreID_seq    SEQUENCE     �   CREATE SEQUENCE public."scorecards_scoreID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."scorecards_scoreID_seq";
       public          postgres    false    229            �           0    0    scorecards_scoreID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."scorecards_scoreID_seq" OWNED BY public.scorecards."scoreID";
          public          postgres    false    228            �            1259    18371    teams    TABLE     D  CREATE TABLE public.teams (
    "teamID" bigint NOT NULL,
    players integer NOT NULL,
    "teamName" character varying,
    captain character varying,
    coach character varying,
    city character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.teams;
       public         heap    postgres    false            �            1259    18370    teams_teamID_seq    SEQUENCE     {   CREATE SEQUENCE public."teams_teamID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."teams_teamID_seq";
       public          postgres    false    235            �           0    0    teams_teamID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."teams_teamID_seq" OWNED BY public.teams."teamID";
          public          postgres    false    234            �            1259    18340    teams_tournaments    TABLE     �   CREATE TABLE public.teams_tournaments (
    team_id bigint NOT NULL,
    tournament_id bigint NOT NULL,
    team_tournament_id bigint NOT NULL
);
 %   DROP TABLE public.teams_tournaments;
       public         heap    postgres    false            �            1259    18343 (   teams_tournaments_team_tournament_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teams_tournaments_team_tournament_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.teams_tournaments_team_tournament_id_seq;
       public          postgres    false    232            �           0    0 (   teams_tournaments_team_tournament_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.teams_tournaments_team_tournament_id_seq OWNED BY public.teams_tournaments.team_tournament_id;
          public          postgres    false    233            �            1259    18380    tournaments    TABLE     �  CREATE TABLE public.tournaments (
    "tourID" bigint NOT NULL,
    "tourName" character varying,
    start_date date NOT NULL,
    end_date date NOT NULL,
    location character varying,
    tour_type character varying,
    prize character varying NOT NULL,
    "formatID" bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.tournaments;
       public         heap    postgres    false            �            1259    18379    tournaments_tourID_seq    SEQUENCE     �   CREATE SEQUENCE public."tournaments_tourID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."tournaments_tourID_seq";
       public          postgres    false    237            �           0    0    tournaments_tourID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."tournaments_tourID_seq" OWNED BY public.tournaments."tourID";
          public          postgres    false    236            �            1259    18114    users    TABLE     c  CREATE TABLE public.users (
    "userID" bigint NOT NULL,
    email character varying,
    "firstName" character varying,
    "lastName" character varying,
    "dateOfBirth" date,
    gender character varying,
    country character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18113    users_userID_seq    SEQUENCE     {   CREATE SEQUENCE public."users_userID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."users_userID_seq";
       public          postgres    false    223            �           0    0    users_userID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."users_userID_seq" OWNED BY public.users."userID";
          public          postgres    false    222            �            1259    18094    venues    TABLE       CREATE TABLE public.venues (
    "venueID" bigint NOT NULL,
    "venueName" character varying,
    "venueCity" character varying,
    "venueCountry" character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.venues;
       public         heap    postgres    false            �            1259    18093    venues_venueID_seq    SEQUENCE     }   CREATE SEQUENCE public."venues_venueID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."venues_venueID_seq";
       public          postgres    false    221            �           0    0    venues_venueID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."venues_venueID_seq" OWNED BY public.venues."venueID";
          public          postgres    false    220            �           2604    17984    formats formatID    DEFAULT     x   ALTER TABLE ONLY public.formats ALTER COLUMN "formatID" SET DEFAULT nextval('public."formats_formatID_seq"'::regclass);
 A   ALTER TABLE public.formats ALTER COLUMN "formatID" DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    18147    logins loginID    DEFAULT     t   ALTER TABLE ONLY public.logins ALTER COLUMN "loginID" SET DEFAULT nextval('public."logins_loginID_seq"'::regclass);
 ?   ALTER TABLE public.logins ALTER COLUMN "loginID" DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    18442    matches matchID    DEFAULT     v   ALTER TABLE ONLY public.matches ALTER COLUMN "matchID" SET DEFAULT nextval('public."matches_matchID_seq"'::regclass);
 @   ALTER TABLE public.matches ALTER COLUMN "matchID" DROP DEFAULT;
       public          postgres    false    238    239    239            �           2604    18302 $   player_statistics playerStatisticsID    DEFAULT     �   ALTER TABLE ONLY public.player_statistics ALTER COLUMN "playerStatisticsID" SET DEFAULT nextval('public."player_statistics_playerStatisticsID_seq"'::regclass);
 U   ALTER TABLE public.player_statistics ALTER COLUMN "playerStatisticsID" DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    17963    players playerID    DEFAULT     x   ALTER TABLE ONLY public.players ALTER COLUMN "playerID" SET DEFAULT nextval('public."players_playerID_seq"'::regclass);
 A   ALTER TABLE public.players ALTER COLUMN "playerID" DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    18126    referees refereeID    DEFAULT     |   ALTER TABLE ONLY public.referees ALTER COLUMN "refereeID" SET DEFAULT nextval('public."referees_refereeID_seq"'::regclass);
 C   ALTER TABLE public.referees ALTER COLUMN "refereeID" DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    18283    scorecards scoreID    DEFAULT     |   ALTER TABLE ONLY public.scorecards ALTER COLUMN "scoreID" SET DEFAULT nextval('public."scorecards_scoreID_seq"'::regclass);
 C   ALTER TABLE public.scorecards ALTER COLUMN "scoreID" DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    18374    teams teamID    DEFAULT     p   ALTER TABLE ONLY public.teams ALTER COLUMN "teamID" SET DEFAULT nextval('public."teams_teamID_seq"'::regclass);
 =   ALTER TABLE public.teams ALTER COLUMN "teamID" DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    18344 $   teams_tournaments team_tournament_id    DEFAULT     �   ALTER TABLE ONLY public.teams_tournaments ALTER COLUMN team_tournament_id SET DEFAULT nextval('public.teams_tournaments_team_tournament_id_seq'::regclass);
 S   ALTER TABLE public.teams_tournaments ALTER COLUMN team_tournament_id DROP DEFAULT;
       public          postgres    false    233    232            �           2604    18383    tournaments tourID    DEFAULT     |   ALTER TABLE ONLY public.tournaments ALTER COLUMN "tourID" SET DEFAULT nextval('public."tournaments_tourID_seq"'::regclass);
 C   ALTER TABLE public.tournaments ALTER COLUMN "tourID" DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    18117    users userID    DEFAULT     p   ALTER TABLE ONLY public.users ALTER COLUMN "userID" SET DEFAULT nextval('public."users_userID_seq"'::regclass);
 =   ALTER TABLE public.users ALTER COLUMN "userID" DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    18097    venues venueID    DEFAULT     t   ALTER TABLE ONLY public.venues ALTER COLUMN "venueID" SET DEFAULT nextval('public."venues_venueID_seq"'::regclass);
 ?   ALTER TABLE public.venues ALTER COLUMN "venueID" DROP DEFAULT;
       public          postgres    false    220    221    221            h          0    17688    ar_internal_metadata 
   TABLE DATA           R   COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
    public          postgres    false    214   ��       m          0    17981    formats 
   TABLE DATA           q   COPY public.formats ("formatID", "formatName", "numberOfOvers", description, created_at, updated_at) FROM stdin;
    public          postgres    false    219   F�       u          0    18144    logins 
   TABLE DATA           W   COPY public.logins ("loginID", "userID", password, created_at, updated_at) FROM stdin;
    public          postgres    false    227   S�       �          0    18439    matches 
   TABLE DATA           �   COPY public.matches ("matchID", "tourID", "matchStatus", "matchDateTime", result, "team1ID", "team2ID", "winningTeamID", "refereeID", "venueID", "pom_playerID", created_at, updated_at) FROM stdin;
    public          postgres    false    239   ��       y          0    18299    player_statistics 
   TABLE DATA           �   COPY public.player_statistics ("playerStatisticsID", "playerID", "matchID", "runsScored", "wicketsTaken", "ballsFaced", "oversBowled", "runsConceded", "catchesTaken", "stumpingsMade", "scoreID", created_at, updated_at) FROM stdin;
    public          postgres    false    231    �       k          0    17960    players 
   TABLE DATA           �   COPY public.players ("playerID", "playerName", "dateOfBirth", country, "teamID", "jerseyNO", "runsScored", "wicketsTaken", "matchesPlayed", created_at, updated_at) FROM stdin;
    public          postgres    false    217   =�       s          0    18123    referees 
   TABLE DATA           �   COPY public.referees ("refereeID", "refereeName", "dateOfBirth", nationality, "matchesOfficiated", created_at, updated_at) FROM stdin;
    public          postgres    false    225   g�       i          0    17927    schema_migrations 
   TABLE DATA           4   COPY public.schema_migrations (version) FROM stdin;
    public          postgres    false    215   )�       w          0    18280 
   scorecards 
   TABLE DATA           �   COPY public.scorecards ("scoreID", "matchID", "playerOfMatch", total_overs_team1, total_runs_team1, total_wickets_team1, total_overs_team2, total_runs_team2, total_wickets_team2, match_summary, created_at, updated_at) FROM stdin;
    public          postgres    false    229   ��       }          0    18371    teams 
   TABLE DATA           l   COPY public.teams ("teamID", players, "teamName", captain, coach, city, created_at, updated_at) FROM stdin;
    public          postgres    false    235   ��       z          0    18340    teams_tournaments 
   TABLE DATA           W   COPY public.teams_tournaments (team_id, tournament_id, team_tournament_id) FROM stdin;
    public          postgres    false    232   ��                 0    18380    tournaments 
   TABLE DATA           �   COPY public.tournaments ("tourID", "tourName", start_date, end_date, location, tour_type, prize, "formatID", created_at, updated_at) FROM stdin;
    public          postgres    false    237   ט       q          0    18114    users 
   TABLE DATA           �   COPY public.users ("userID", email, "firstName", "lastName", "dateOfBirth", gender, country, created_at, updated_at) FROM stdin;
    public          postgres    false    223   ߛ       o          0    18094    venues 
   TABLE DATA           m   COPY public.venues ("venueID", "venueName", "venueCity", "venueCountry", created_at, updated_at) FROM stdin;
    public          postgres    false    221   z�       �           0    0    formats_formatID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."formats_formatID_seq"', 3, true);
          public          postgres    false    218            �           0    0    logins_loginID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."logins_loginID_seq"', 2, true);
          public          postgres    false    226            �           0    0    matches_matchID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."matches_matchID_seq"', 11, true);
          public          postgres    false    238            �           0    0 (   player_statistics_playerStatisticsID_seq    SEQUENCE SET     Y   SELECT pg_catalog.setval('public."player_statistics_playerStatisticsID_seq"', 1, false);
          public          postgres    false    230            �           0    0    players_playerID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."players_playerID_seq"', 36, true);
          public          postgres    false    216            �           0    0    referees_refereeID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."referees_refereeID_seq"', 11, true);
          public          postgres    false    224            �           0    0    scorecards_scoreID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."scorecards_scoreID_seq"', 1, false);
          public          postgres    false    228            �           0    0    teams_teamID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."teams_teamID_seq"', 25, true);
          public          postgres    false    234            �           0    0 (   teams_tournaments_team_tournament_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public.teams_tournaments_team_tournament_id_seq', 1, false);
          public          postgres    false    233            �           0    0    tournaments_tourID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."tournaments_tourID_seq"', 15, true);
          public          postgres    false    236            �           0    0    users_userID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."users_userID_seq"', 4, true);
          public          postgres    false    222            �           0    0    venues_venueID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."venues_venueID_seq"', 18, true);
          public          postgres    false    220            �           2606    17694 .   ar_internal_metadata ar_internal_metadata_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);
 X   ALTER TABLE ONLY public.ar_internal_metadata DROP CONSTRAINT ar_internal_metadata_pkey;
       public            postgres    false    214            �           2606    17988    formats formats_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.formats
    ADD CONSTRAINT formats_pkey PRIMARY KEY ("formatID");
 >   ALTER TABLE ONLY public.formats DROP CONSTRAINT formats_pkey;
       public            postgres    false    219            �           2606    18151    logins logins_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.logins
    ADD CONSTRAINT logins_pkey PRIMARY KEY ("loginID");
 <   ALTER TABLE ONLY public.logins DROP CONSTRAINT logins_pkey;
       public            postgres    false    227            �           2606    18447    matches matches_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pkey PRIMARY KEY ("matchID");
 >   ALTER TABLE ONLY public.matches DROP CONSTRAINT matches_pkey;
       public            postgres    false    239            �           2606    18304 &   player_statistics pk_player_statistics 
   CONSTRAINT     v   ALTER TABLE ONLY public.player_statistics
    ADD CONSTRAINT pk_player_statistics PRIMARY KEY ("playerStatisticsID");
 P   ALTER TABLE ONLY public.player_statistics DROP CONSTRAINT pk_player_statistics;
       public            postgres    false    231            �           2606    17990    players players_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY ("playerID");
 >   ALTER TABLE ONLY public.players DROP CONSTRAINT players_pkey;
       public            postgres    false    217            �           2606    18130    referees referee_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.referees
    ADD CONSTRAINT referee_pkey PRIMARY KEY ("refereeID");
 ?   ALTER TABLE ONLY public.referees DROP CONSTRAINT referee_pkey;
       public            postgres    false    225            �           2606    17933 (   schema_migrations schema_migrations_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);
 R   ALTER TABLE ONLY public.schema_migrations DROP CONSTRAINT schema_migrations_pkey;
       public            postgres    false    215            �           2606    18287    scorecards scorecards_pk 
   CONSTRAINT     ]   ALTER TABLE ONLY public.scorecards
    ADD CONSTRAINT scorecards_pk PRIMARY KEY ("scoreID");
 B   ALTER TABLE ONLY public.scorecards DROP CONSTRAINT scorecards_pk;
       public            postgres    false    229            �           2606    18378    teams teams_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY ("teamID");
 :   ALTER TABLE ONLY public.teams DROP CONSTRAINT teams_pkey;
       public            postgres    false    235            �           2606    18346 (   teams_tournaments teams_tournaments_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.teams_tournaments
    ADD CONSTRAINT teams_tournaments_pkey PRIMARY KEY (team_tournament_id);
 R   ALTER TABLE ONLY public.teams_tournaments DROP CONSTRAINT teams_tournaments_pkey;
       public            postgres    false    232            �           2606    18387    tournaments tournaments_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.tournaments
    ADD CONSTRAINT tournaments_pkey PRIMARY KEY ("tourID");
 F   ALTER TABLE ONLY public.tournaments DROP CONSTRAINT tournaments_pkey;
       public            postgres    false    237            �           2606    18121    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    223            �           2606    18101    venues venue_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.venues
    ADD CONSTRAINT venue_pkey PRIMARY KEY ("venueID");
 ;   ALTER TABLE ONLY public.venues DROP CONSTRAINT venue_pkey;
       public            postgres    false    221            �           2606    18152    logins fk_logins_user    FK CONSTRAINT     �   ALTER TABLE ONLY public.logins
    ADD CONSTRAINT fk_logins_user FOREIGN KEY ("userID") REFERENCES public.users("userID") ON DELETE SET NULL;
 ?   ALTER TABLE ONLY public.logins DROP CONSTRAINT fk_logins_user;
       public          postgres    false    227    3260    223            �           2606    18478    matches fk_matches_referee    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_referee FOREIGN KEY ("refereeID") REFERENCES public.referees("refereeID") ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_referee;
       public          postgres    false    239    225    3262            �           2606    18453    matches fk_matches_team1    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_team1 FOREIGN KEY ("team1ID") REFERENCES public.teams("teamID") ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_team1;
       public          postgres    false    235    3272    239            �           2606    18458    matches fk_matches_team2    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_team2 FOREIGN KEY ("team2ID") REFERENCES public.teams("teamID") ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_team2;
       public          postgres    false    235    239    3272            �           2606    18468    matches fk_matches_teamp    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_teamp FOREIGN KEY ("pom_playerID") REFERENCES public.teams("teamID") ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_teamp;
       public          postgres    false    235    239    3272            �           2606    18463    matches fk_matches_teamw    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_teamw FOREIGN KEY ("winningTeamID") REFERENCES public.teams("teamID") ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_teamw;
       public          postgres    false    239    3272    235            �           2606    18448    matches fk_matches_tournament    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_tournament FOREIGN KEY ("tourID") REFERENCES public.tournaments("tourID") ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_tournament;
       public          postgres    false    3274    237    239            �           2606    18473    matches fk_matches_venue    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT fk_matches_venue FOREIGN KEY ("venueID") REFERENCES public.venues("venueID") ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.matches DROP CONSTRAINT fk_matches_venue;
       public          postgres    false    221    239    3258            �           2606    18305 -   player_statistics fk_player_statistics_player    FK CONSTRAINT     �   ALTER TABLE ONLY public.player_statistics
    ADD CONSTRAINT fk_player_statistics_player FOREIGN KEY ("playerID") REFERENCES public.players("playerID") ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.player_statistics DROP CONSTRAINT fk_player_statistics_player;
       public          postgres    false    3254    217    231            �           2606    18315 0   player_statistics fk_player_statistics_scorecard    FK CONSTRAINT     �   ALTER TABLE ONLY public.player_statistics
    ADD CONSTRAINT fk_player_statistics_scorecard FOREIGN KEY ("scoreID") REFERENCES public.scorecards("scoreID") ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.player_statistics DROP CONSTRAINT fk_player_statistics_scorecard;
       public          postgres    false    229    3266    231            �           2606    18293 &   scorecards fk_scorecards_playerofmatch    FK CONSTRAINT     �   ALTER TABLE ONLY public.scorecards
    ADD CONSTRAINT fk_scorecards_playerofmatch FOREIGN KEY ("playerOfMatch") REFERENCES public.players("playerID") ON DELETE SET NULL;
 P   ALTER TABLE ONLY public.scorecards DROP CONSTRAINT fk_scorecards_playerofmatch;
       public          postgres    false    3254    217    229            �           2606    18388 !   tournaments fk_tournaments_format    FK CONSTRAINT     �   ALTER TABLE ONLY public.tournaments
    ADD CONSTRAINT fk_tournaments_format FOREIGN KEY ("formatID") REFERENCES public.formats("formatID") ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.tournaments DROP CONSTRAINT fk_tournaments_format;
       public          postgres    false    219    3256    237            �           2606    18483    players for_teamID    FK CONSTRAINT     �   ALTER TABLE ONLY public.players
    ADD CONSTRAINT "for_teamID" FOREIGN KEY ("teamID") REFERENCES public.teams("teamID") NOT VALID;
 >   ALTER TABLE ONLY public.players DROP CONSTRAINT "for_teamID";
       public          postgres    false    217    3272    235            h   }   x�u�A
� @�u<E/�qFg�,�bԐBcJRr�BW�d���o�|�[_[��������ш8���$�Db�$Mj���5?�%�ʌ�e�Z�C-X'�����<K��!$��jY���&o����
-!      m   �   x�}�=r�0�Z�b3�dP��e,F@PL�}d�����4��Ӓ�x�"�p{@=���=�|�л�r�[7ƃk��b~�koVn��x�����p����Иu�!%)� �:�5�q���H���D�O����p2+���i4޺���ݰX����f ��n	q��.�q��"��H��B�Ҙ�
�\�a�Zx�+�7�~��s�����w��v��Q�(R�XI�*%1A�^�(�>8m�}      u   S   x�3�4�t����q042�4202�54�50S0��26�2�Գ44�4�-�e�i5�����������R�������W� ���      �   Z  x�}��N�0E��W�j����u�V�릔*�iE���NK�6!R�X�3srg&N����Msh^�aFd@2@y���z7�u�Ey�xTAE�N�8o���2!D��t(E��v�l.q�Ǖ�Ia�.'�zԓ`1��+:c���n�n��a|� <Ð#��[�({)Hٹh)2�hRxK*������1?�~u��w����1ژb
I���Qazj�[��{ך�#����<w<���>���4��.�p�U�}��^Vr��)�����3If��(�����W��u!���MI8�x>K���gH��tM��k*��Z��NݯP�ܬf`8"�	I/�����4      y      x������ � �      k     x��W�n�F}����{���F�:�v� E_�m�HT��:_߳��P"A䡀a:�gΙ3#E��wq`�����gBdܐ���D�S���ԆH.���e�&\��[��
D� 7]�۸awU���MJ�2���x|�b[�Cl���s"�t�� �Q/�)8�M0���*I���v`�ݾR��q�II>�/�26�����#�yD�� ��~���vU=��v�x,Lg���PC�� ��'�rx�B��)�OkJ�,�˥�J
�w���g$a���z�Ʉ��%1��ě��/�
�s<>^���*�6�3��.�����x�-�BÔ�XbgL�Bۜ��[��%wC��dw�z����v��]l�H�pZ�&�t��P_�T�1����#c[��u��۾K�<�?g��B���<q��0j��V
.� ��uW�ۮ�@�o��$�XK����Uw�$Tn�#)W *8�z�������Y2�B	�u��b���!�D��M��1�̭�6̺;�(���}Uo��j�^@�B&���&���Њ�ǆ3��va�32v[?@�#cxT��'�@I0$Z̥s���D~"D����t���D�T���%@�I/L�LϢ6\���M ���c_�CײM	�}xN�j2��.�h�w�/1{wQH�kͽ�+��aG��=�h�U����T�����M�c�8q��`��e�P$��Y��Qt�:�)v�5�rw �J�����s�=	$�ë@�AJ>�}�ayz��	Dѵ/q[oه�cs4��xZ����P��ɽ7���bI���CU6����h"M�T�0C��X��d�u.0�~��	DE�6�{�%�6]�ש��Q)4���-���������Y�]�.����I�H5�*L��;!�ZXظJ�/� *H��ں��q8����U�>a�'|HV��m)�˕�n��'�?����}}X��7�`Q�H{L΄�
are�ZA(����6{��)���d��r>Ҟ�q�-X��X�l�"�����]!��
D��ߛ��/�_���a�U�O�4#%��L�:��A���� ��_l���!�q��BO�7�,��q�/�����^=>���;$���=fF��3������˙���Rz�� 
wx�_��.w�[�
�(�ѩ#b)c�5�*���y�4�p��~ B�����]�z����������R�4���Mzs�˹n&U�W-��Ri��^re���	D������ȣ��E0�a��_�@�����l�f��'/�X&	"�ɾ8����=�P�����9��?NE��      s   �  x�}�Mn�0���)x��]g�6M7���AD�lh
����/ݸ�P��{�73�<q����%�aH�;�*�+���x<e���H0!+�+fg���p�	a�Z��@_�aH����b^�2^	>1����VZ�	K������C��4Юb��q�	� .�ג��X�p��B���d�h/�u���C�#�Y��s�0F����IX�����l!_��RS>����	Y7��Z)��q<@&�=�}�+�rP5A�f̋��Ʊ��+��s�}$OqH�e�[��3c��(���3�	[���'�����&Q��'aY�Nk*sn��&a�v�Pi�c�!��!���l%�m=�&�Ҏk�"a����Hv>t�a7����O23��!��v"����:r����K�B��L�yx��;��iU/l�W��)��7�5�z      i   U   x�M���0�?�T6������h�����e�	���:�ɳ�_R�L('���B����_��5�Rנ��HVE�����a$�      w      x������ � �      }   �  x�}U�n�8<S_��@R��)��Lg�8;���"�ŵDzH1����R0��
>��.uwU�$���CK��N��V`�M�GV�v�҆�V9r{E��!�����Q�/�\�e\$\Jq����A����,�(���NC�!���fPА*��wN�e�Ģ�e����|�Z�N����>�'+�kh/Bwq��=�֩y!�ƙ,%K�@Q9r<+?���ʓ;�&��ֺ��辷Ɠ�6[?���E�ƅ(y1�q6R]��v�(ߒ���	��"��{�u�z|��亅��Y��,�bn��Y�����wE6�~��e^]v�+�ނ��f'�8KEVfg�������m�|��|����LK�CwZ-_�<N�2I�3P��O�(�QO������:@�?��+��5��T�G�A��j
���'?E|��?���^5�>�O6l���n��u�A�K�$��D~��$�2 �V��akљ-���;�Y� ��zFQ,���`|����s^{��?����t[��0�+��浸��L�b����<��l��H�?��s��tѕ��#��T�`Y\&�Hg,GP$&�<@�k�r-���`W}�����͸�p0�Y���j7�ȋ�I��䎠HL���B^�e��_��w�)��+�9��*�W����D��"!>�m��Q�-h��T�CC`��;��5�c���
�ׇyM)c.rV�2��D2�yS�u����7�v�;蕧k�{e���{���4]B�tEb��
9x���&�>���t��6�2 L�C�n^+)b���i�!����ð����U�NommmM����cF5��wf��"NEӜ;�"Ԅ$O
��F ���hi�Nc�i�i�N�u0r`Z��d1j�eG*�)g(�E�Ź��p`)�O^�q����u����ޔ{5xoM3?@r��L��I!��6OS�܂�)�d�R�[���U�����ç�����zsh���MN�Y0)���R�yV�"�7���̜-/      z      x������ � �         �  x�}UM��0=ǿ·v���?b���V-�.B�zɖh�J����N ���F��y~��3D�ш����G��u����n�D��Q�%�h�q9/����8��<r�W�rY��H�M�r������5`/� �&5�0��jC���k��,>����B	.z*ߗY9�Q�{ �'mp�����S�$�ܮ�K^y�v�L[���í_�j�½�h��R[�n���B[O3�?�|R�"��s���r�u<y~85�mib�W0`�.�u�̻���H����;f�"t���kS�=>��m�-�Yw1'k���A�HP+�Y���x{�{��T�X�]�#Ib��[��A;��R~�Rv�4�h݅b@��
-s��"�zq�A� �p�P��v>���mI~D `��X�P_�'�}��x�mή?y	J�փQ`8q6
s{��J�ֻ8h�8�@F��*/���Q�ׁ�m�������g���mH�`Z�B�m#�����y-���L� [8�t:xq�4�R��j�{�(# Q�N:V��yE6�l�z�bnQ ��M����K���:f�[���3ި�2���*}��c^�N�m��!e{�8a=�+8��d[gi����_{��)v(Nz9��i�|�ew�!
�����QJ ��be�����T�x��$؉nw!S:���z�]�NY�(Y�FS�;i��VuB��h��AMC
/)Md(����)��?d*���;�iGަ75�c�c�?Ɉ�:      q   �   x���1
1E��)������&�JK��YHv����XYHl�_|����Rּ����B�GI�^��F��0"-%�;�ۜ��n��N;��>
ZU%�d��N���*�w�AF>�DA~;O_��}�VN�;�\�1�~\W�      o   �  x���]S�0���_���3��zW]��~��ugg��9�Xbi���ߴ�N� z��|����цLж]��v��E�N[@q��N"I�d�8M$��@8Fו��jr����4d����t��g�ɕu3]-���*�%"@���J;�:<�m�ۺ�P�� 2��L�l a�εqd>\jtU�sh࣪$��(�@8A7grtcʼj�3���8z9���"J;�CX�i����o{0�����И��#���H�N'�Nѭy-��N��`i�}��дj������)�%,����/��%9Z�]Y�<MVr�9�*��dvg�{�O.]c���V.xX��;_��`4I�P=�!̢Mv�s G���9�(d��D4�Y���[_o|���GU�s��[?��cIJ�L%J �b��5ƅAp~����|C�'2]�u��[g5h�	J�aV"A��2�1������[���6_B6L���t�g1�b!�f�C����P)r
nV�ݪb���ި6uѳ��Lkv���,��knS-tKk��[����_ݏ㐿��za����� ���m��%!��kBNG<��3%{��!�R45:��-�Xز	�L�K*eƳ���f
��g�L�t�C/VAܐ�����O"�P=����b��W��Z     