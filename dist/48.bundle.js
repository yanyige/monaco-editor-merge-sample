(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/redshift/redshift.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/redshift/redshift.js ***!
  \******************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '--',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sql',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        \"AES128\", \"AES256\", \"ALL\", \"ALLOWOVERWRITE\", \"ANALYSE\", \"ANALYZE\", \"AND\", \"ANY\", \"ARRAY\", \"AS\", \"ASC\", \"AUTHORIZATION\",\n        \"BACKUP\", \"BETWEEN\", \"BINARY\", \"BLANKSASNULL\", \"BOTH\", \"BYTEDICT\", \"BZIP2\", \"CASE\", \"CAST\", \"CHECK\", \"COLLATE\", \"COLUMN\",\n        \"CONSTRAINT\", \"CREATE\", \"CREDENTIALS\", \"CROSS\", \"CURRENT_DATE\", \"CURRENT_TIME\", \"CURRENT_TIMESTAMP\", \"CURRENT_USER\",\n        \"CURRENT_USER_ID\", \"DEFAULT\", \"DEFERRABLE\", \"DEFLATE\", \"DEFRAG\", \"DELTA\", \"DELTA32K\", \"DESC\", \"DISABLE\", \"DISTINCT\", \"DO\",\n        \"ELSE\", \"EMPTYASNULL\", \"ENABLE\", \"ENCODE\", \"ENCRYPT\", \"ENCRYPTION\", \"END\", \"EXCEPT\", \"EXPLICIT\", \"FALSE\", \"FOR\", \"FOREIGN\",\n        \"FREEZE\", \"FROM\", \"FULL\", \"GLOBALDICT256\", \"GLOBALDICT64K\", \"GRANT\", \"GROUP\", \"GZIP\", \"HAVING\", \"IDENTITY\", \"IGNORE\", \"ILIKE\",\n        \"IN\", \"INITIALLY\", \"INNER\", \"INTERSECT\", \"INTO\", \"IS\", \"ISNULL\", \"JOIN\", \"LEADING\", \"LEFT\", \"LIKE\", \"LIMIT\", \"LOCALTIME\",\n        \"LOCALTIMESTAMP\", \"LUN\", \"LUNS\", \"LZO\", \"LZOP\", \"MINUS\", \"MOSTLY13\", \"MOSTLY32\", \"MOSTLY8\", \"NATURAL\", \"NEW\", \"NOT\", \"NOTNULL\",\n        \"NULL\", \"NULLS\", \"OFF\", \"OFFLINE\", \"OFFSET\", \"OID\", \"OLD\", \"ON\", \"ONLY\", \"OPEN\", \"OR\", \"ORDER\", \"OUTER\", \"OVERLAPS\", \"PARALLEL\",\n        \"PARTITION\", \"PERCENT\", \"PERMISSIONS\", \"PLACING\", \"PRIMARY\", \"RAW\", \"READRATIO\", \"RECOVER\", \"REFERENCES\", \"RESPECT\", \"REJECTLOG\",\n        \"RESORT\", \"RESTORE\", \"RIGHT\", \"SELECT\", \"SESSION_USER\", \"SIMILAR\", \"SNAPSHOT\", \"SOME\", \"SYSDATE\", \"SYSTEM\", \"TABLE\", \"TAG\",\n        \"TDES\", \"TEXT255\", \"TEXT32K\", \"THEN\", \"TIMESTAMP\", \"TO\", \"TOP\", \"TRAILING\", \"TRUE\", \"TRUNCATECOLUMNS\", \"UNION\", \"UNIQUE\", \"USER\",\n        \"USING\", \"VERBOSE\", \"WALLET\", \"WHEN\", \"WHERE\", \"WITH\", \"WITHOUT\"\n    ],\n    operators: [\n        \"AND\", \"BETWEEN\", \"IN\", \"LIKE\", \"NOT\", \"OR\", \"IS\", \"NULL\", \"INTERSECT\", \"UNION\", \"INNER\", \"JOIN\", \"LEFT\", \"OUTER\", \"RIGHT\"\n    ],\n    builtinFunctions: [\n        \"current_schema\", \"current_schemas\", \"has_database_privilege\", \"has_schema_privilege\", \"has_table_privilege\", \"age\",\n        \"current_time\", \"current_timestamp\", \"localtime\", \"isfinite\", \"now\", \"ascii\", \"get_bit\", \"get_byte\", \"set_bit\", \"set_byte\",\n        \"to_ascii\", \"approximate percentile_disc\", \"avg\", \"count\", \"listagg\", \"max\", \"median\", \"min\", \"percentile_cont\", \"stddev_samp\",\n        \"stddev_pop\", \"sum\", \"var_samp\", \"var_pop\", \"bit_and\", \"bit_or\", \"bool_and\", \"bool_or\", \"cume_dist\", \"first_value\", \"lag\",\n        \"last_value\", \"lead\", \"nth_value\", \"ratio_to_report\", \"dense_rank\", \"ntile\", \"percent_rank\", \"rank\", \"row_number\", \"case\",\n        \"coalesce\", \"decode\", \"greatest\", \"least\", \"nvl\", \"nvl2\", \"nullif\", \"add_months\", \"at time zone\", \"convert_timezone\",\n        \"current_date\", \"date_cmp\", \"date_cmp_timestamp\", \"date_cmp_timestamptz\", \"date_part_year\", \"dateadd\", \"datediff\",\n        \"date_part\", \"date_trunc\", \"extract\", \"getdate\", \"interval_cmp\", \"last_day\", \"months_between\", \"next_day\", \"sysdate\",\n        \"timeofday\", \"timestamp_cmp\", \"timestamp_cmp_date\", \"timestamp_cmp_timestamptz\", \"timestamptz_cmp\", \"timestamptz_cmp_date\",\n        \"timestamptz_cmp_timestamp\", \"timezone\", \"to_timestamp\", \"trunc\", \"abs\", \"acos\", \"asin\", \"atan\", \"atan2\", \"cbrt\", \"ceil\",\n        \"ceiling\", \"checksum\", \"cos\", \"cot\", \"degrees\", \"dexp\", \"dlog1\", \"dlog10\", \"exp\", \"floor\", \"ln\", \"log\", \"mod\", \"pi\", \"power\",\n        \"radians\", \"random\", \"round\", \"sin\", \"sign\", \"sqrt\", \"tan\", \"to_hex\", \"bpcharcmp\", \"btrim\", \"bttext_pattern_cmp\", \"char_length\",\n        \"character_length\", \"charindex\", \"chr\", \"concat\", \"crc32\", \"func_sha1\", \"initcap\", \"left and rights\", \"len\", \"length\", \"lower\",\n        \"lpad and rpads\", \"ltrim\", \"md5\", \"octet_length\", \"position\", \"quote_ident\", \"quote_literal\", \"regexp_count\", \"regexp_instr\",\n        \"regexp_replace\", \"regexp_substr\", \"repeat\", \"replace\", \"replicate\", \"reverse\", \"rtrim\", \"split_part\", \"strpos\", \"strtol\",\n        \"substring\", \"textlen\", \"translate\", \"trim\", \"upper\", \"cast\", \"convert\", \"to_char\", \"to_date\", \"to_number\", \"json_array_length\",\n        \"json_extract_array_element_text\", \"json_extract_path_text\", \"current_setting\", \"pg_cancel_backend\", \"pg_terminate_backend\",\n        \"set_config\", \"current_database\", \"current_user\", \"current_user_id\", \"pg_backend_pid\", \"pg_last_copy_count\", \"pg_last_copy_id\",\n        \"pg_last_query_id\", \"pg_last_unload_count\", \"session_user\", \"slice_num\", \"user\", \"version\", \"abbrev\", \"acosd\", \"any\", \"area\",\n        \"array_agg\", \"array_append\", \"array_cat\", \"array_dims\", \"array_fill\", \"array_length\", \"array_lower\", \"array_ndims\",\n        \"array_position\", \"array_positions\", \"array_prepend\", \"array_remove\", \"array_replace\", \"array_to_json\", \"array_to_string\",\n        \"array_to_tsvector\", \"array_upper\", \"asind\", \"atan2d\", \"atand\", \"bit\", \"bit_length\", \"bound_box\", \"box\",\n        \"brin_summarize_new_values\", \"broadcast\", \"cardinality\", \"center\", \"circle\", \"clock_timestamp\", \"col_description\", \"concat_ws\",\n        \"convert_from\", \"convert_to\", \"corr\", \"cosd\", \"cotd\", \"covar_pop\", \"covar_samp\", \"current_catalog\", \"current_query\",\n        \"current_role\", \"currval\", \"cursor_to_xml\", \"diameter\", \"div\", \"encode\", \"enum_first\", \"enum_last\", \"enum_range\", \"every\",\n        \"family\", \"format\", \"format_type\", \"generate_series\", \"generate_subscripts\", \"get_current_ts_config\", \"gin_clean_pending_list\",\n        \"grouping\", \"has_any_column_privilege\", \"has_column_privilege\", \"has_foreign_data_wrapper_privilege\", \"has_function_privilege\",\n        \"has_language_privilege\", \"has_sequence_privilege\", \"has_server_privilege\", \"has_tablespace_privilege\", \"has_type_privilege\",\n        \"height\", \"host\", \"hostmask\", \"inet_client_addr\", \"inet_client_port\", \"inet_merge\", \"inet_same_family\", \"inet_server_addr\",\n        \"inet_server_port\", \"isclosed\", \"isempty\", \"isopen\", \"json_agg\", \"json_object\", \"json_object_agg\", \"json_populate_record\",\n        \"json_populate_recordset\", \"json_to_record\", \"json_to_recordset\", \"jsonb_agg\", \"jsonb_object_agg\", \"justify_days\", \"justify_hours\",\n        \"justify_interval\", \"lastval\", \"left\", \"line\", \"localtimestamp\", \"lower_inc\", \"lower_inf\", \"lpad\", \"lseg\", \"make_date\",\n        \"make_interval\", \"make_time\", \"make_timestamp\", \"make_timestamptz\", \"masklen\", \"mode\", \"netmask\", \"network\", \"nextval\", \"npoints\",\n        \"num_nonnulls\", \"num_nulls\", \"numnode\", \"obj_description\", \"overlay\", \"parse_ident\", \"path\", \"pclose\", \"percentile_disc\",\n        \"pg_advisory_lock\", \"pg_advisory_lock_shared\", \"pg_advisory_unlock\", \"pg_advisory_unlock_all\", \"pg_advisory_unlock_shared\",\n        \"pg_advisory_xact_lock\", \"pg_advisory_xact_lock_shared\", \"pg_backup_start_time\", \"pg_blocking_pids\", \"pg_client_encoding\",\n        \"pg_collation_is_visible\", \"pg_column_size\", \"pg_conf_load_time\", \"pg_control_checkpoint\", \"pg_control_init\", \"pg_control_recovery\",\n        \"pg_control_system\", \"pg_conversion_is_visible\", \"pg_create_logical_replication_slot\", \"pg_create_physical_replication_slot\",\n        \"pg_create_restore_point\", \"pg_current_xlog_flush_location\", \"pg_current_xlog_insert_location\", \"pg_current_xlog_location\",\n        \"pg_database_size\", \"pg_describe_object\", \"pg_drop_replication_slot\", \"pg_export_snapshot\", \"pg_filenode_relation\",\n        \"pg_function_is_visible\", \"pg_get_constraintdef\", \"pg_get_expr\", \"pg_get_function_arguments\", \"pg_get_function_identity_arguments\",\n        \"pg_get_function_result\", \"pg_get_functiondef\", \"pg_get_indexdef\", \"pg_get_keywords\", \"pg_get_object_address\",\n        \"pg_get_owned_sequence\", \"pg_get_ruledef\", \"pg_get_serial_sequence\", \"pg_get_triggerdef\", \"pg_get_userbyid\", \"pg_get_viewdef\",\n        \"pg_has_role\", \"pg_identify_object\", \"pg_identify_object_as_address\", \"pg_index_column_has_property\", \"pg_index_has_property\",\n        \"pg_indexam_has_property\", \"pg_indexes_size\", \"pg_is_in_backup\", \"pg_is_in_recovery\", \"pg_is_other_temp_schema\",\n        \"pg_is_xlog_replay_paused\", \"pg_last_committed_xact\", \"pg_last_xact_replay_timestamp\", \"pg_last_xlog_receive_location\",\n        \"pg_last_xlog_replay_location\", \"pg_listening_channels\", \"pg_logical_emit_message\", \"pg_logical_slot_get_binary_changes\",\n        \"pg_logical_slot_get_changes\", \"pg_logical_slot_peek_binary_changes\", \"pg_logical_slot_peek_changes\", \"pg_ls_dir\",\n        \"pg_my_temp_schema\", \"pg_notification_queue_usage\", \"pg_opclass_is_visible\", \"pg_operator_is_visible\", \"pg_opfamily_is_visible\",\n        \"pg_options_to_table\", \"pg_postmaster_start_time\", \"pg_read_binary_file\", \"pg_read_file\", \"pg_relation_filenode\",\n        \"pg_relation_filepath\", \"pg_relation_size\", \"pg_reload_conf\", \"pg_replication_origin_create\", \"pg_replication_origin_drop\",\n        \"pg_replication_origin_oid\", \"pg_replication_origin_progress\", \"pg_replication_origin_session_is_setup\",\n        \"pg_replication_origin_session_progress\", \"pg_replication_origin_session_reset\", \"pg_replication_origin_session_setup\",\n        \"pg_replication_origin_xact_reset\", \"pg_replication_origin_xact_setup\", \"pg_rotate_logfile\", \"pg_size_bytes\", \"pg_size_pretty\",\n        \"pg_sleep\", \"pg_sleep_for\", \"pg_sleep_until\", \"pg_start_backup\", \"pg_stat_file\", \"pg_stop_backup\", \"pg_switch_xlog\",\n        \"pg_table_is_visible\", \"pg_table_size\", \"pg_tablespace_databases\", \"pg_tablespace_location\", \"pg_tablespace_size\",\n        \"pg_total_relation_size\", \"pg_trigger_depth\", \"pg_try_advisory_lock\", \"pg_try_advisory_lock_shared\", \"pg_try_advisory_xact_lock\",\n        \"pg_try_advisory_xact_lock_shared\", \"pg_ts_config_is_visible\", \"pg_ts_dict_is_visible\", \"pg_ts_parser_is_visible\",\n        \"pg_ts_template_is_visible\", \"pg_type_is_visible\", \"pg_typeof\", \"pg_xact_commit_timestamp\", \"pg_xlog_location_diff\",\n        \"pg_xlog_replay_pause\", \"pg_xlog_replay_resume\", \"pg_xlogfile_name\", \"pg_xlogfile_name_offset\", \"phraseto_tsquery\",\n        \"plainto_tsquery\", \"point\", \"polygon\", \"popen\", \"pqserverversion\", \"query_to_xml\", \"querytree\", \"quote_nullable\", \"radius\",\n        \"range_merge\", \"regexp_matches\", \"regexp_split_to_array\", \"regexp_split_to_table\", \"regr_avgx\", \"regr_avgy\", \"regr_count\",\n        \"regr_intercept\", \"regr_r2\", \"regr_slope\", \"regr_sxx\", \"regr_sxy\", \"regr_syy\", \"right\", \"row_security_active\", \"row_to_json\",\n        \"rpad\", \"scale\", \"set_masklen\", \"setseed\", \"setval\", \"setweight\", \"shobj_description\", \"sind\", \"sprintf\", \"statement_timestamp\",\n        \"stddev\", \"string_agg\", \"string_to_array\", \"strip\", \"substr\", \"table_to_xml\", \"table_to_xml_and_xmlschema\", \"tand\", \"text\",\n        \"to_json\", \"to_regclass\", \"to_regnamespace\", \"to_regoper\", \"to_regoperator\", \"to_regproc\", \"to_regprocedure\", \"to_regrole\",\n        \"to_regtype\", \"to_tsquery\", \"to_tsvector\", \"transaction_timestamp\", \"ts_debug\", \"ts_delete\", \"ts_filter\", \"ts_headline\",\n        \"ts_lexize\", \"ts_parse\", \"ts_rank\", \"ts_rank_cd\", \"ts_rewrite\", \"ts_stat\", \"ts_token_type\", \"tsquery_phrase\", \"tsvector_to_array\",\n        \"tsvector_update_trigger\", \"tsvector_update_trigger_column\", \"txid_current\", \"txid_current_snapshot\", \"txid_snapshot_xip\",\n        \"txid_snapshot_xmax\", \"txid_snapshot_xmin\", \"txid_visible_in_snapshot\", \"unnest\", \"upper_inc\", \"upper_inf\", \"variance\", \"width\",\n        \"width_bucket\", \"xml_is_well_formed\", \"xml_is_well_formed_content\", \"xml_is_well_formed_document\", \"xmlagg\", \"xmlcomment\",\n        \"xmlconcat\", \"xmlelement\", \"xmlexists\", \"xmlforest\", \"xmlparse\", \"xmlpi\", \"xmlroot\", \"xmlserialize\", \"xpath\", \"xpath_exists\"\n    ],\n    builtinVariables: [\n    // NOT SUPPORTED\n    ],\n    pseudoColumns: [\n    // NOT SUPPORTED\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@#$]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/--+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            // Not supporting nested comments, as nested comments seem to not be standard?\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        pseudoColumns: [\n            [/[$][A-Za-z_][\\w@#$]*/, {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\"/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        quotedIdentifier: [\n            [/[^\"]+/, 'identifier'],\n            [/\"\"/, 'identifier'],\n            [/\"/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        scopes: [\n        // NOT SUPPORTED\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/redshift/redshift.js?");

/***/ })

}]);