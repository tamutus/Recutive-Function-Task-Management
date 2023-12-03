import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';

export const TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInput> = z.object({
  successorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorInputSchema;
