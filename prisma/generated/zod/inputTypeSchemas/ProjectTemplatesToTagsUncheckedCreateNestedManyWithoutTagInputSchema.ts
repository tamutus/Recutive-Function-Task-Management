import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema';
import { ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';

export const ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInputSchema;
