import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateWithoutEnergyInputSchema } from './EnergiesToSkillsCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';

export const EnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema;
