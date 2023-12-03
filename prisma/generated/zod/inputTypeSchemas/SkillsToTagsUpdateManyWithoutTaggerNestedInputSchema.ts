import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutTaggerInputSchema } from './SkillsToTagsCreateWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedCreateWithoutTaggerInputSchema } from './SkillsToTagsUncheckedCreateWithoutTaggerInputSchema';
import { SkillsToTagsCreateOrConnectWithoutTaggerInputSchema } from './SkillsToTagsCreateOrConnectWithoutTaggerInputSchema';
import { SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema } from './SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema';
import { SkillsToTagsCreateManyTaggerInputEnvelopeSchema } from './SkillsToTagsCreateManyTaggerInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema } from './SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema';
import { SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema } from './SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';

export const SkillsToTagsUpdateManyWithoutTaggerNestedInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyWithoutTaggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema),z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutTaggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTagsScalarWhereInputSchema),z.lazy(() => SkillsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsUpdateManyWithoutTaggerNestedInputSchema;
