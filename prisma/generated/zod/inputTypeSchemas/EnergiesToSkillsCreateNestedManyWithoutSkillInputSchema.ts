import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateWithoutSkillInputSchema } from './EnergiesToSkillsCreateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { EnergiesToSkillsCreateManySkillInputEnvelopeSchema } from './EnergiesToSkillsCreateManySkillInputEnvelopeSchema';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';

export const EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema;
