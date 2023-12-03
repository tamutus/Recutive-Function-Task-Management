import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsScalarWhereInputSchema } from './PrivateEnergiesToSkillsScalarWhereInputSchema';

export const PrivateEnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema;
