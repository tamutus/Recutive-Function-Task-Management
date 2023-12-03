import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateWithoutSkillInputSchema } from './SkillsToSkillPathsCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema } from './SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema';
import { SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema } from './SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToSkillPathsCreateManySkillInputEnvelopeSchema } from './SkillsToSkillPathsCreateManySkillInputEnvelopeSchema';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema } from './SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema } from './SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema';
import { SkillsToSkillPathsScalarWhereInputSchema } from './SkillsToSkillPathsScalarWhereInputSchema';

export const SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToSkillPathsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInputSchema;
