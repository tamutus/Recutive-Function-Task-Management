import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutTagsInputSchema } from './ProjectTemplateUpdateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTagsInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutTagsInputSchema;
