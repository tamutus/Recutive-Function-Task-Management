import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutTagsInputSchema } from './ProjectTemplateCreateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutTagsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutTagsInputSchema } from './ProjectTemplateCreateOrConnectWithoutTagsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutTagsInputSchema;
