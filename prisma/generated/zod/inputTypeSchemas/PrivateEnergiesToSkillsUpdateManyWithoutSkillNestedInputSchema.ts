import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema } from './PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsScalarWhereInputSchema } from './PrivateEnergiesToSkillsScalarWhereInputSchema';

export const PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema;
