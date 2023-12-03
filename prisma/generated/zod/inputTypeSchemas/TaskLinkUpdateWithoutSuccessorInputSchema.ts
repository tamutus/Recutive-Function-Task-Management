import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema';

export const TaskLinkUpdateWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkUpdateWithoutSuccessorInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  precursor: z.lazy(() => TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema).optional()
}).strict();

export default TaskLinkUpdateWithoutSuccessorInputSchema;
