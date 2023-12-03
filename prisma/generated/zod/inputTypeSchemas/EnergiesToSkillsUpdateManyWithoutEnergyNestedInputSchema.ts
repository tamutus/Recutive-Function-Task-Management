import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateWithoutEnergyInputSchema } from './EnergiesToSkillsCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToSkillsScalarWhereInputSchema } from './EnergiesToSkillsScalarWhereInputSchema';

export const EnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),z.lazy(() => EnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema;
