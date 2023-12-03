import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsScalarWhereInputSchema } from './PrioritiesToSkillPathsScalarWhereInputSchema';

export const PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema;
