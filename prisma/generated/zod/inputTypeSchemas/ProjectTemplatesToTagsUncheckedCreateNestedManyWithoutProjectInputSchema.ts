import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';

export const ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutProjectInputSchema;
