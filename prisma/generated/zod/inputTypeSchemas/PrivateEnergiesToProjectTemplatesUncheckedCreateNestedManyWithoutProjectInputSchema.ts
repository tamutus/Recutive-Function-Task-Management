import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';

export const PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema;
