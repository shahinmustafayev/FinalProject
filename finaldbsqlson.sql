PGDMP  ;                
    |            final_project    16.3    16.3 9               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24796    final_project    DATABASE     �   CREATE DATABASE final_project WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Azerbaijani (Latin)_Azerbaijan.1252';
    DROP DATABASE final_project;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    24867    USER    TABLE     �   CREATE TABLE public."USER" (
    id integer NOT NULL,
    username character varying(150),
    password character varying(100),
    isactive integer DEFAULT 1 NOT NULL,
    isdeleted integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."USER";
       public         heap    postgres    false    4            �            1259    24866    USER_id_seq    SEQUENCE     �   CREATE SEQUENCE public."USER_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."USER_id_seq";
       public          postgres    false    4    226            	           0    0    USER_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."USER_id_seq" OWNED BY public."USER".id;
          public          postgres    false    225            �            1259    24809    blog    TABLE     �  CREATE TABLE public.blog (
    id integer NOT NULL,
    title character varying(250),
    description text,
    author character varying(100),
    date date,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    image character varying DEFAULT 'test.jpg'::character varying NOT NULL,
    isdeleted integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.blog;
       public         heap    postgres    false    4            �            1259    24808    blog_blog_id_seq    SEQUENCE     �   CREATE SEQUENCE public.blog_blog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.blog_blog_id_seq;
       public          postgres    false    218    4            
           0    0    blog_blog_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.blog_blog_id_seq OWNED BY public.blog.id;
          public          postgres    false    217            �            1259    24820    category    TABLE       CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(150),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    isdeleted integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false    4            �            1259    24819    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    220    4                       0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    219            �            1259    24882    contact    TABLE     �  CREATE TABLE public.contact (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    subject character varying(250) NOT NULL,
    message character varying(250) NOT NULL,
    isdeleted integer DEFAULT 0,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.contact;
       public         heap    postgres    false    4            �            1259    24881    contact_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.contact_id_seq;
       public          postgres    false    4    228                       0    0    contact_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;
          public          postgres    false    227            �            1259    24849    plants    TABLE       CREATE TABLE public.plants (
    id integer NOT NULL,
    title character varying(250),
    category_name character varying(150),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.plants;
       public         heap    postgres    false    4            �            1259    24848    plants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.plants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.plants_id_seq;
       public          postgres    false    224    4                       0    0    plants_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.plants_id_seq OWNED BY public.plants.id;
          public          postgres    false    223            �            1259    24831    product    TABLE     :  CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(250),
    description text,
    image character varying(250),
    model character varying(250),
    price double precision NOT NULL,
    old_price double precision NOT NULL,
    categoryid integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    isdeleted integer DEFAULT 0 NOT NULL,
    date timestamp without time zone DEFAULT '2024-08-21 00:00:00'::timestamp without time zone NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false    4            �            1259    24830    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    4    222                       0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    221            �            1259    24798    users    TABLE     _  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    isactive integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    isdeleted integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    4            �            1259    24797    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    4    216                       0    0    users_user_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.id;
          public          postgres    false    215            M           2604    24870    USER id    DEFAULT     f   ALTER TABLE ONLY public."USER" ALTER COLUMN id SET DEFAULT nextval('public."USER_id_seq"'::regclass);
 8   ALTER TABLE public."USER" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            <           2604    24812    blog id    DEFAULT     g   ALTER TABLE ONLY public.blog ALTER COLUMN id SET DEFAULT nextval('public.blog_blog_id_seq'::regclass);
 6   ALTER TABLE public.blog ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            A           2604    24823    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            P           2604    24885 
   contact id    DEFAULT     h   ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);
 9   ALTER TABLE public.contact ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            J           2604    24852 	   plants id    DEFAULT     f   ALTER TABLE ONLY public.plants ALTER COLUMN id SET DEFAULT nextval('public.plants_id_seq'::regclass);
 8   ALTER TABLE public.plants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            E           2604    24834 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            8           2604    24801    users id    DEFAULT     i   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    24867    USER 
   TABLE DATA           M   COPY public."USER" (id, username, password, isactive, isdeleted) FROM stdin;
    public          postgres    false    226   UA       �          0    24809    blog 
   TABLE DATA           n   COPY public.blog (id, title, description, author, date, created_at, updated_at, image, isdeleted) FROM stdin;
    public          postgres    false    218   rA       �          0    24820    category 
   TABLE DATA           O   COPY public.category (id, name, created_at, updated_at, isdeleted) FROM stdin;
    public          postgres    false    220   �B                 0    24882    contact 
   TABLE DATA           g   COPY public.contact (id, name, email, subject, message, isdeleted, created_at, updated_at) FROM stdin;
    public          postgres    false    228   BC       �          0    24849    plants 
   TABLE DATA           R   COPY public.plants (id, title, category_name, created_at, updated_at) FROM stdin;
    public          postgres    false    224   BD       �          0    24831    product 
   TABLE DATA           �   COPY public.product (id, name, description, image, model, price, old_price, categoryid, created_at, updated_at, isdeleted, date) FROM stdin;
    public          postgres    false    222   _D       �          0    24798    users 
   TABLE DATA           d   COPY public.users (id, username, password, isactive, created_at, updated_at, isdeleted) FROM stdin;
    public          postgres    false    216   �G                  0    0    USER_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."USER_id_seq"', 1, false);
          public          postgres    false    225                       0    0    blog_blog_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.blog_blog_id_seq', 2, true);
          public          postgres    false    217                       0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 38, true);
          public          postgres    false    219                       0    0    contact_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.contact_id_seq', 6, true);
          public          postgres    false    227                       0    0    plants_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.plants_id_seq', 1, false);
          public          postgres    false    223                       0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 19, true);
          public          postgres    false    221                       0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 24, true);
          public          postgres    false    215            a           2606    24874    USER USER_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."USER"
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."USER" DROP CONSTRAINT "USER_pkey";
       public            postgres    false    226            Y           2606    24818    blog blog_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.blog
    ADD CONSTRAINT blog_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.blog DROP CONSTRAINT blog_pkey;
       public            postgres    false    218            [           2606    24829    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    220            c           2606    24890    contact contact_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.contact DROP CONSTRAINT contact_pkey;
       public            postgres    false    228            _           2606    24856    plants plants_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.plants
    ADD CONSTRAINT plants_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.plants DROP CONSTRAINT plants_pkey;
       public            postgres    false    224            ]           2606    24842    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    222            U           2606    24805    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            W           2606    24807    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    216            d           2606    24843    product product_categoryid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.category(id);
 I   ALTER TABLE ONLY public.product DROP CONSTRAINT product_categoryid_fkey;
       public          postgres    false    220    4699    222            �      x������ � �      �   =  x��Q=O�0��_qK�NL۬ �JL����51�/����c�qJ�Tf6��ǽ�S���GWJ�{��C� ������� �9B���"�R�Ԁ��4`�8ϖ�1D?epk՚ ;D��ߔ;���7��݀G���*��RpjYmF:P�K &ƾ?���tNs:3�
�7n�a62�90p�À�u�cy�8'�?�#��C���R�ŰH9\����5��D	U,�f)W��z�4(Y
]�U�
q/�o�u�A���ȅ��:�އ&�L^�3gxh�������o_�R�2/2�7�B��(F����Z�[���I�
�      �   s   x�3��I�-H�I,�4202�5��5�T04�2��21�32101��'e�e��{rfI�ə
%�y�ى�G6�i16�22�346323�'e�e��Z��c+3=3K#S3|R\1z\\\ W3w         �   x�}�An� E�3���` �ʺ]��npK�(q��ʷ��I�8r5�}��Ϡ��}���m�v�'sV�Imx�!]m��\1��5<v!�C.��~d�k�B�!BS�X�Rɔ��}�	<�~��/q�!/��ʵ`+��Պ�\��(�y�V��	�R^�v�]�UAҊ�rè�d�?G(����!D��F��rWÙ/d-c��V�jƫ���>��Ú<���+���2K��V+���C�_tM��      �      x������ � �      �   4  x��V�r�8��@vɚ��oՕ�|���Kh��)IyW�r�tuC�� k��ΕP��F�`f�e���撳�m~���O=�S���j�4>ğ�>��%�]��!�k^�+>v��C�N�j�ݡ��R/u�cl���?h����ݪ�!�Ŏ6n�b-����f�-'���G;���v��k��7�x��Lf�?uu�+�ƛ���	�w�)5��#M��ݐ���-�фvKm����ɟb;��/,5�:�J5*T���[�cJ3c�f @�
�K �V�q��.A��r��1�a�o�mA[�n&0�mWq����RiI� >������%��!f�hXv_7�z~��0��-��葈��*&?�"��@i�����A�!ٟ��'���þ�'&
���*������F�b����K�	���h�Z��	 ��4`>*��K��C�����]dҐ/N�Њ�����+��$�Ԛ@b"���
&֐,�<c�=��Kg<�ZW��q��DD�$"�}Mou��zH��X����Z��R1�y�F������S��R�R36�����oi)#�4�8d�"�6Y
�J+�����3�#��������v�I���l���Vo��v��I�x�)�.#(0PljS����%�<�dp�LOiU^}�DU��SQ���Pg���']�X)���%�c]�S
�
c�{W~��t�
���X�܅= �J :�K�E�"�=n��j�g�JGV���$ �Gm�
JVހ�������y���	�<����wtP@-�Q����P᎛Ar�����F0�      �     x�}ϻr�@@�����e��eY� (�@�Ye������dbE}�o��"���!��_{�-Zdh.���,�4o�Q���M�����c�ͻ�d�4�|
Q `1 �G�1 �a»V�*rS��;���r�j�6]��tka_ʲ:M��ȗ�('G�h�4Y�3�?��G�"���ɱѕ�}��������WBF�Ļ��u{հŶh+�B~w*�|j�x�Ȣzx��?`�rdrB��JX�@��~�|a�     