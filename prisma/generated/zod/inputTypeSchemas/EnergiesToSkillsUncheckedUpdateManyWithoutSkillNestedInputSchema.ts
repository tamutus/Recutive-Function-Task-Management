import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateWithoutSkillInputSchema } from './EnergiesToSkillsCreateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema } from './EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { EnergiesToSkillsCreateManySkillInputEnvelopeSchema } from './EnergiesToSkillsCreateManySkillInputEnvelopeSchema';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema } from './EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema } from './EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema';
import { EnergiesToSkillsScalarWhereInputSchema } from './EnergiesToSkillsScalarWhereInputSchema';

export const EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),z.lazy(() => EnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema;
