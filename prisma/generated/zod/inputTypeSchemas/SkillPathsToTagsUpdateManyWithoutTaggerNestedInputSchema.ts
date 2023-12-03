import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutTaggerInputSchema } from './SkillPathsToTagsCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema';
import { SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema } from './SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema } from './SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema } from './SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema';
import { SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema } from './SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';

export const SkillPathsToTagsUpdateManyWithoutTaggerNestedInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyWithoutTaggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema),z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutTaggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsUpdateManyWithoutTaggerNestedInputSchema;
