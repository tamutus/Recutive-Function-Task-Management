import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateWithoutSkillInputSchema } from './SkillsToTagsCreateWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTagsCreateOrConnectWithoutSkillInputSchema } from './SkillsToTagsCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTagsCreateManySkillInputEnvelopeSchema } from './SkillsToTagsCreateManySkillInputEnvelopeSchema';
import { SkillsToTagsWhereUniqueInputSchema } from './SkillsToTagsWhereUniqueInputSchema';
import { SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema } from './SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema';
import { SkillsToTagsScalarWhereInputSchema } from './SkillsToTagsScalarWhereInputSchema';

export const SkillsToTagsUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTagsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTagsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTagsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTagsWhereUniqueInputSchema),z.lazy(() => SkillsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => SkillsToTagsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTagsScalarWhereInputSchema),z.lazy(() => SkillsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTagsUpdateManyWithoutSkillNestedInputSchema;
