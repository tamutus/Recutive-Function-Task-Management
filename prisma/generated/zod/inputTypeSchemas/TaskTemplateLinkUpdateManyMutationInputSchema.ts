import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';

export const TaskTemplateLinkUpdateManyMutationInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateManyMutationInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateLinkUpdateManyMutationInputSchema;
