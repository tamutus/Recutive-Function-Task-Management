import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutSkillInputSchema } from './SkillPathsToTagsCreateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema';
import { SkillPathsToTagsCreateManySkillInputEnvelopeSchema } from './SkillPathsToTagsCreateManySkillInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';

export const SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema;
