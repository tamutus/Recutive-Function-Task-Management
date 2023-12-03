import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutSkillInputSchema } from './SkillsToTagsCreateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTagsCreateOrConnectWithoutSkillInputSchema } from './SkillsToTagsCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTagsCreateManySkillInputEnvelopeSchema } from './SkillsToTagsCreateManySkillInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';

export const SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema;
