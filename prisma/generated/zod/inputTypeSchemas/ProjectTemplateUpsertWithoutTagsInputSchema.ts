import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutTagsInputSchema } from './ProjectTemplateUpdateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTagsInputSchema';
import { ProjectTemplateCreateWithoutTagsInputSchema } from './ProjectTemplateCreateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutTagsInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutTagsInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutTagsInputSchema;
