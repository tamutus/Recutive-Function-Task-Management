import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema } from './SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema } from './SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema';
import { SkillsToTaskTemplatesScalarWhereInputSchema } from './SkillsToTaskTemplatesScalarWhereInputSchema';

export const SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInputSchema;
