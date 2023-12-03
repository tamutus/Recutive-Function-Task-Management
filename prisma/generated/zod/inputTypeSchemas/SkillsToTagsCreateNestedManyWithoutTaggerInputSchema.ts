import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutTaggerInputSchema } from './SkillsToTagsCreateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedCreateWithoutTaggerInputSchema';
import { SkillsToTagsCreateOrConnectWithoutTaggerInputSchema } from './SkillsToTagsCreateOrConnectWithoutTaggerInputSchema';
import { SkillsToTagsCreateManyTaggerInputEnvelopeSchema } from './SkillsToTagsCreateManyTaggerInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';

export const SkillsToTagsCreateNestedManyWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsCreateNestedManyWithoutTaggerInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsCreateNestedManyWithoutTaggerInputSchema;
