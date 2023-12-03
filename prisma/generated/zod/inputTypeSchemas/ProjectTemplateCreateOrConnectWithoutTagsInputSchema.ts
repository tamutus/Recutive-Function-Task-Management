import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutTagsInputSchema } from './ProjectTemplateCreateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutTagsInputSchema';

export const ProjectTemplateCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutTagsInputSchema;
