import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema;
