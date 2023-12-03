import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUpdateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';
import { ProjectTemplateCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutPrivateTagsInputSchema;
