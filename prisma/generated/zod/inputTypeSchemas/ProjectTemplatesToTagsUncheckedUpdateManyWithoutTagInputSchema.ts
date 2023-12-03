import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taggerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInputSchema;
