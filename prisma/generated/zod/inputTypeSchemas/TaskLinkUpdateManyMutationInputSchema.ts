import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';

export const TaskLinkUpdateManyMutationInputSchema: z.ZodType<Prisma.TaskLinkUpdateManyMutationInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TaskLinkUpdateManyMutationInputSchema;
