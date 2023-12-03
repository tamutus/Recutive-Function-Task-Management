import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema';

export const TaskTemplateLinkUpdateWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateWithoutSuccessorInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  precursor: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema).optional()
}).strict();

export default TaskTemplateLinkUpdateWithoutSuccessorInputSchema;
