import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema } from './SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema';
import { SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema } from './SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema } from './SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema';
import { SkillsToSkillPathsScalarWhereInputSchema } from './SkillsToSkillPathsScalarWhereInputSchema';

export const SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema;
