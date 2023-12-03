import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema } from './ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutPrivateTagsInputSchema;
