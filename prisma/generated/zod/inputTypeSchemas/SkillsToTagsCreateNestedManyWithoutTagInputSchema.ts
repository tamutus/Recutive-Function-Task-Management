import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutTagInputSchema } from './SkillsToTagsCreateWithoutTagInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillsToTagsUncheckedCreateWithoutTagInputSchema';
import { SkillsToTagsCreateOrConnectWithoutTagInputSchema } from './SkillsToTagsCreateOrConnectWithoutTagInputSchema';
import { SkillsToTagsCreateManyTagInputEnvelopeSchema } from './SkillsToTagsCreateManyTagInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';

export const SkillsToTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsCreateNestedManyWithoutTagInputSchema;
