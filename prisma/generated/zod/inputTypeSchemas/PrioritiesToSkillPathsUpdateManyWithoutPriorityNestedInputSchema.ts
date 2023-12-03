import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsScalarWhereInputSchema } from './PrioritiesToSkillPathsScalarWhereInputSchema';

export const PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillPathsUpdateManyWithoutPriorityNestedInputSchema;
