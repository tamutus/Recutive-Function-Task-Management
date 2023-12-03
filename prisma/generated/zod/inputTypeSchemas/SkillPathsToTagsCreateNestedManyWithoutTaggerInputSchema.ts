import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutTaggerInputSchema } from './SkillPathsToTagsCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema } from './SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';

export const SkillPathsToTagsCreateNestedManyWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateNestedManyWithoutTaggerInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsCreateNestedManyWithoutTaggerInputSchema;
