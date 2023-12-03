import { z } from 'zod';

export const TaskLinkScalarFieldEnumSchema = z.enum(['precursorId','successorId','linkType']);

export default TaskLinkScalarFieldEnumSchema;
