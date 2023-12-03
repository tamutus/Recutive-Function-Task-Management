import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateWithoutSkillInputSchema } from './PrioritiesToSkillsCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema } from './PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateManySkillInputEnvelopeSchema } from './PrioritiesToSkillsCreateManySkillInputEnvelopeSchema';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema } from './PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema } from './PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema';
import { PrioritiesToSkillsScalarWhereInputSchema } from './PrioritiesToSkillsScalarWhereInputSchema';

export const PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema;
