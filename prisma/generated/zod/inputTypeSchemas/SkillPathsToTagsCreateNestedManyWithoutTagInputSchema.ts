import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutTagInputSchema } from './SkillPathsToTagsCreateWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTagInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTagInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutTagInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutTagInputSchema';
import { SkillPathsToTagsCreateManyTagInputEnvelopeSchema } from './SkillPathsToTagsCreateManyTagInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';

export const SkillPathsToTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsCreateNestedManyWithoutTagInputSchema;
