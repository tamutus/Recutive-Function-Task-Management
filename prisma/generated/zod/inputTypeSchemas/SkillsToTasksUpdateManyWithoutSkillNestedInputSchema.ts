import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateWithoutSkillInputSchema } from './SkillsToTasksCreateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedCreateWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTasksCreateOrConnectWithoutSkillInputSchema } from './SkillsToTasksCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTasksCreateManySkillInputEnvelopeSchema } from './SkillsToTasksCreateManySkillInputEnvelopeSchema';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema } from './SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema } from './SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema';
import { SkillsToTasksScalarWhereInputSchema } from './SkillsToTasksScalarWhereInputSchema';

export const SkillsToTasksUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTasksCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTasksCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTasksCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTasksScalarWhereInputSchema),z.lazy(() => SkillsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTasksUpdateManyWithoutSkillNestedInputSchema;
