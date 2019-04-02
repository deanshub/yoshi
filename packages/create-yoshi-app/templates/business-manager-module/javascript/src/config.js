import { ModuleId, PageComponentId } from '@wix/business-manager-api';

// Note: after submitting PR to BM you can remove the constant strings below
// Note: should be in sync with the config inside your BM module ERB
export const MODULE_ID = ModuleId.Realestate || '{%PROJECT_NAME%}';
export const COMPONENT_NAME = PageComponentId.Realestate || '{%projectName%}';
