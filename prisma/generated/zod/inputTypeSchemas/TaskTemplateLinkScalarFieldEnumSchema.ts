import { z } from 'zod';

export const TaskTemplateLinkScalarFieldEnumSchema = z.enum(['precursorId','successorId','linkType']);

export default TaskTemplateLinkScalarFieldEnumSchema;
