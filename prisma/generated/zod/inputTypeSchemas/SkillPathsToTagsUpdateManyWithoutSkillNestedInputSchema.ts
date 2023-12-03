import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateWithoutSkillInputSchema } from './SkillPathsToTagsCreateWithoutSkillInputSchema';
import { SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema';
import { SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema } from './SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema';
import { SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema } from './SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { SkillPathsToTagsCreateManySkillInputEnvelopeSchema } from './SkillPathsToTagsCreateManySkillInputEnvelopeSchema';
import { SkillPathsToTagsWhereUniqueInputSchema } from './SkillPathsToTagsWhereUniqueInputSchema';
import { SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema } from './SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema } from './SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema';
import { SkillPathsToTagsScalarWhereInputSchema } from './SkillPathsToTagsScalarWhereInputSchema';

export const SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillPathsToTagsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema),z.lazy(() => SkillPathsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => SkillPathsToTagsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema;
