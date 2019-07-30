/*
** SCHEMA: dr
** 
** ROLE: dr_role
**
*/

-- Create the Application role  if it does not exist
DO LANGUAGE plpgsql
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_group WHERE groname = 'dr_role' ) THEN
        -- Create Application Role
        CREATE ROLE dr_role
            NOLOGIN
            INHERIT;

        -- Add role comment
        COMMENT ON ROLE dr_role
            IS 'GROUP: application-dr, Group that contains all the permissions necessary for the dr application.';

        -- Add Grants
        GRANT CONNECT ON DATABASE labsndbx TO dr_role;

    ELSE
        RAISE NOTICE 'dr_role role already exists.';

    END IF;
END
$$;
