import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateWithoutTaskInputSchema } from './SkillsToTasksCreateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedCreateWithoutTaskInputSchema } from './SkillsToTasksUncheckedCreateWithoutTaskInputSchema';
import { SkillsToTasksCreateOrConnectWithoutTaskInputSchema } from './SkillsToTasksCreateOrConnectWithoutTaskInputSchema';
import { SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { SkillsToTasksCreateManyTaskInputEnvelopeSchema } from './SkillsToTasksCreateManyTaskInputEnvelopeSchema';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { SkillsToTasksScalarWhereInputSchema } from './SkillsToTasksScalarWhereInputSchema';

export const SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => SkillsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToTasksScalarWhereInputSchema),z.lazy(() => SkillsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema;
