import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema';
import { TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema } from './TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema';

export const TaskLinkUpdateInputSchema: z.ZodType<Prisma.TaskLinkUpdateInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  precursor: z.lazy(() => TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema).optional(),
  successor: z.lazy(() => TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema).optional()
}).strict();

export default TaskLinkUpdateInputSchema;
