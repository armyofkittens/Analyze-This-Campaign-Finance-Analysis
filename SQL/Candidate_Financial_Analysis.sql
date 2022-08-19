-- Create Candidates Table
CREATE TABLE Candidates (
    index int NOT NULL,
	id int  NOT NULL ,
    cycle int  NOT NULL ,
    fec_cand_id varchar  NOT NULL ,
    unique_key varchar NOT NULL,
    cid varchar  NOT NULL ,
    first_last_party varchar  NOT NULL ,
    party varchar  NOT NULL ,
    dist_id_run_for varchar  NOT NULL ,
    dist_id_currently_held varchar  NOT NULL ,
    current_candidate varchar  NOT NULL ,
    cycle_candidate varchar  NOT NULL,
	crpico varchar NOT NULL,
	recip_code varchar NOT NULL,
	nopacs varchar,
	raised_from_pacs int NOT Null,
	raised_from_individuals int NOT Null,
	raised_total int NOT Null,
	raised_unitemized int NOT NULL,
	result varchar NOT NULL,
	UNIQUE (unique_key),
    PRIMARY KEY (id)
);

-- Create Pacs Table
CREATE TABLE Pacs (
    id int  NOT NULL ,
    cycle int  NOT NULL ,
    fec_rec_no bigint  NOT NULL ,
    pac_id varchar  NOT NULL ,
    unique_key varchar NOT NULL,
    cid varchar  NOT NULL ,
    amount decimal  NOT NULL ,
    contribution_date date,
    real_code varchar,
    type varchar  NOT NULL ,
    di varchar  NOT NULL ,
    fec_cand_id varchar,
    PRIMARY KEY (id)
);

-- Create Individual_Contributions Table
CREATE TABLE Individual_Contributions_12_16 (
    id int  NOT NULL,
	cycle int NOT NULL,
    contributor_id varchar NOT NULL,
	contributor_name varchar,
	unique_key varchar NOT NULL,
	recipient_id varchar NOT NULL,
	amount int NOT NULL,
	date date,
	org_name varchar,
	state varchar,
	zip int,
	gender varchar NOT NULL,
	occupation varchar,
    PRIMARY KEY (id)
);

-- Drop Tables
DROP TABLE Candidates CASCADE
DROP TABLE Pacs 
DROP TABLE Individual_Contributions_12_16
DROP TABLE candidate_pacs
DROP TABLE candidate_indvs

-- Select Tables
SELECT * FROM Candidates
SELECT * FROM Pacs
SELECT * FROM Individual_Contributions
SELECT * FROM candidate_pacs
SELECT * FROM candidate_indvs


-- Create left join for candidate_pacs table
SELECT ca.id,
    ca.cycle,
	ca.cid,
	ca.first_last_party,
	ca.party,
	ca.dist_id_run_for,
	pc.amount,
    pc.contribution_date,
	pc.pac_id
INTO candidate_pacs
FROM Candidates as ca
LEFT JOIN Pacs as pc
ON ca.unique_key = pc.unique_key;


-- Create left join for candidate_indvs table
SELECT ca.id,
    ca.cycle,
	ca.cid,
	ca.first_last_party,
	ca.party,
	ca.dist_id_run_for,
	ic.contributor_name,
    ic.date,
	ic.amount,
	ic.state,
	ic.zip,
	ic.gender,
	ic.occupation
INTO candidate_ind
FROM Candidates as ca
LEFT JOIN Individual_Contributions as ic
ON ca.unique_key = ic.unique_key;