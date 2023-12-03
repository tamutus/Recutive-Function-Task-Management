import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema';

export const ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema;
