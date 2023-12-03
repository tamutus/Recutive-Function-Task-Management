import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';

export const ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema;
