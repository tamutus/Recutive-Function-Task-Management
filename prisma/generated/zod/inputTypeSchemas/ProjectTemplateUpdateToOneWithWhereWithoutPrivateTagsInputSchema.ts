import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUpdateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
